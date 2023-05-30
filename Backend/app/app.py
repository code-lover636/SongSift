from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .bot import reply
from . import pred

import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# minimal app - gete request
@app.get("/",tags=['ROOT'])
async def root():
    return {"Name": "Song Sift", "Desc": "Explore,Enjoy,listen"}

# get 
# @app.get("/get",tags=['pred'])
# async def get():
#     return {"data":"hello"}

class MyData(BaseModel):
    text: str
    
# Post
@app.post("/reply",tags=['reply'])
async def post(data: MyData):
    text = data.json()
    text = text[len('{"text: " '):- len('"}')]
    res = reply(text)
    print("Text:", text)
    print(res)
    return {
            "status":"Success",
            "reply": res
            }

@app.post("/recommend",tags=['prediction'])
async def post(data: MyData):
    text = data.json()
    text = text[len('{"text: " '):- len('"}')]
    res = pred.response(text)
    print("Text:", text)
    print(res)
    return {
            "status":"Success",
            "reply": res
            }
 
# # Update
# @app.put("/update/{id}",tags=['todos'])
# async def update(id, body):
#     return {}

# @app.delete("/update/{id}",tags=['todos'])
# async def update(id):
#     return {}
    
