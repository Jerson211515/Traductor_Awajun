from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
# Habilitar CORS (para permitir conexiones desde el navegador)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos los orígenes (puedes limitarlo luego)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar el diccionario JSON al iniciar la API
with open("dictionary.json", "r", encoding="utf-8") as f:
    dictionary = json.load(f)

@app.get("/")
def home():
    return {"message": "API Traductor Awajún-Español funcionando correctamente."}

@app.get("/translate/{word}")
def translate(word: str):
    word_lower = word.lower().strip()
    word_lower = word_lower.replace("¿", "").replace("?", "")
    
    # Buscar en el diccionario Awajún → Español
    if word_lower in dictionary:
        return {"awajun": word_lower, "spanish": dictionary[word_lower]}
    
    # Buscar en el diccionario Español → Awajún
    reverse = {v.split(",")[0].strip(): k for k, v in dictionary.items()}
    if word_lower in reverse:
        return {"spanish": word_lower, "awajun": reverse[word_lower]}
    
    return {"message": f"No se encontró traducción para '{word}'."}
