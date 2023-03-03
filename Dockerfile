FROM angular as frontend
WORKDIR /usr/src/app
COPY package*.json /urs/src/app/
RUN npm install --development
COPY . .
CMD npm start 



FROM frontend as test
# capas aqui

CMD 

FROM frontend as prod
# capas aqui

CMD python manage.py runserver 0.0.0.0:8000
