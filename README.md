# Projeyi ayağa kaldırmak için;

npm i

Serveri ayağa kaldırmak için : src/assets/data konumuna gidiniz ardından şu komutu çalıştırınız;

json-server --watch countries.json

Projeyi çalıştırmak için;

npm run project-start

Eğer gulp ile projeyi çalıştırmak isterseniz şu komutları çalıştırınız;

npm run build

gulp

## Proje içerisinde kullanılan araç ve teknolojiler

Front End Framework => Framework olarak Angular tercih edildi. Anguların her yapı taşına değinmeye çalıştım.(Change Detection, ViewEncapculation, Sibling, Componentler arası veri paylaşımı, Lazy Load, Routing, Moduler Yapı, İnput ve Output decaratorleri, Dependency Injection, Life Cycles vb.)

CSS => CSS tarafında SCSS tercih edildi. SCSS'in getirdiği yenilikler kullanılmaya çalışıldı(Variables,mixins,each vb). Class isimlendirmeleri BEM metadolojisine göre yapıldı. CSS framework olarak Bootstrap kullanıldı. Animasyon ve media queryler göstermek amacıyla bir kaç yerde kullanıldı.

Data => Data için Fake-API tercih edildi. Fake API'yi kullanabilmek için json-server kütüphanesini dahil ettim projeye.

Task Manager ve Build Tools => Bu kısımda gulp kullanıldı. Gulp ile js,css dosyalarını sıkıştırma vb. işlemler kullanılabilir hale getirildi. Loader olarak uglify,autoprefixer vb eklenildi. BrowserSync ile gulp ile derleme işlemi eklenildi.

HTTP => HTTP istekleri için rxJs kütüphanesi kullanıldı. rxJs'in getirdiği yapılar kullanılmaya çalışıldı(map,filter vb.)

Kullanılan Kütüphaneler :

angular-material
ngx-leaflet
angular-fontawesome
angularx-social-login
gulp
json-server
leaflet
ngx-toastr
rxjs
