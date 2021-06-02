# Projeyi ayaða kaldýrmak için;

npm i

Serveri ayaða kaldýrmak için : src/assets/data konumuna gidiniz ardýndan þu komutu çalýþtýrýnýz;

json-server --watch countries.json

Projeyi çalýþtýrmak için;

npm run project-start

Eðer gulp ile projeyi çalýþtýrmak isterseniz þu komutlarý çalýþtýrýnýz;

npm run build
gulp

## Proje içerisinde kullanýlan araç ve teknolojiler

Front End Framework => Framework olarak Angular tercih edildi. Angularýn her yapý taþýna deðinmeye çalýþtým.(Change Detection, ViewEncapculation, Sibling, Componentler arasý veri paylaþýmý, Lazy Load, Routing, Moduler Yapý, Ýnput ve Output decaratorleri, Dependency Injection, Life Cycles vb.)

CSS => CSS tarafýnda SCSS tercih edildi. SCSS'in getirdiði yenilikler kullanýlmaya çalýþýldý(Variables,mixins,each vb). Class isimlendirmeleri BEM metadolojisine göre yapýldý. CSS framework olarak Bootstrap kullanýldý. Animasyon ve media queryler göstermek amacýyla bir kaç yerde kullanýldý.

Data => Data için Fake-API tercih edildi. Fake API'yi kullanabilmek için json-server kütüphanesini dahil ettim projeye.

Task Manager ve Build Tools => Bu kýsýmda gulp kullanýldý. Gulp ile js,css dosyalarýný sýkýþtýrma vb. iþlemler kullanýlabilir hale getirildi. Loader olarak uglify,autoprefixer vb eklenildi. BrowserSync ile gulp ile derleme iþlemi eklenildi.

HTTP => HTTP istekleri için rxJs kütüphanesi kullanýldý. rxJs'in getirdiði yapýlar kullanýlmaya çalýþýldý(map,filter vb.)

Kullanýlan Kütüphaneler :

angular-material
ngx-leaflet
angular-fontawesome
angularx-social-login
gulp
json-server
leaflet
ngx-toastr
rxjs
