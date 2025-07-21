FROM nginx:alpine

# ลบไฟล์ default ของ nginx ก่อน
RUN rm -rf /usr/share/nginx/html/*

# คัดลอกไฟล์เว็บไซต์ไปยังโฟลเดอร์ของ nginx
COPY . /usr/share/nginx/html

# เปิดพอร์ต 80
EXPOSE 80
