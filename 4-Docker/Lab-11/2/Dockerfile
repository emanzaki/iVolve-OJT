FROM gcr.io/distroless/java17-debian11

WORKDIR /javaApp

COPY target/demo-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java" , "-jar" , "demo-0.0.1-SNAPSHOT.jar"]

