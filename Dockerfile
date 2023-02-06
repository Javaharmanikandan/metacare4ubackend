FROM navinkr431/nodejs:latest As ui-build
WORKDIR /data/
#COPY ./frontend  /data/frontend
#RUN cd /data/frontend && npm install @angular/cli --force && npm install --force && npm run build
#RUN cd /data/frontend/dist && ls -l
#FROM navinkr431/nodejs:latest AS server-build
#WORKDIR /data/
#COPY --from=ui-build /data/frontend/dist/frigate /data/frigate
COPY ./backend /data/
COPY ./backend/.env /data
RUN cd /data && npm install --force 
EXPOSE 8098/tcp
CMD ["npm", "run", "start"]
