# using python base image
FROM python:3.5

COPY ./requirements.txt /backend/requirements.txt

WORKDIR /backend

# install python dependencies
RUN pip install -r /backend/requirements.txt

COPY . /backend


# set required environment variables
ENV FLASK_ENV "development"
ENV FLASK_APP=app.py

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]

EXPOSE 80
