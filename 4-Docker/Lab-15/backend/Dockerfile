FROM python:3.11-alpine

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5000

ENTRYPOINT ["python","app.py"]
