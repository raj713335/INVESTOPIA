import uvicorn
from fastapi import FastAPI
from health import health
import pickle
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pickle_in = open("Models/classifier.pkl", "rb")
classifier = pickle.load(pickle_in)


@app.get('/')
def index():
    return {'message': 'Hello, This is an API For making ML Predictions For Life Expectancy'}


@app.post('/predict')
async def predict(data: health):

    data = data.dict()

    Status = data["Status"]
    Alcohol = data["Alcohol"]
    BMI = data["BMI"]

    prediction = classifier.predict([[Status, Alcohol, BMI]])

    return prediction[0]


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
