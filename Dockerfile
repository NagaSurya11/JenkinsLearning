FROM centos
# set working directory
WORKDIR /app
COPY ./executable /app/
# start app
RUN chmod +x ./executable
EXPOSE 3000
CMD ["./executable"]

