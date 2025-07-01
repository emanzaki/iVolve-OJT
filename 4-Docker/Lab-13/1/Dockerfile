FROM python:3.11-alpine

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 8080

ENTRYPOINT ["python" , "app.py"]