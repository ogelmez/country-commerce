# Projeyi aya�a kald�rmak i�in;

npm i

Serveri aya�a kald�rmak i�in : src/assets/data konumuna gidiniz ard�ndan �u komutu �al��t�r�n�z;

json-server --watch countries.json

Projeyi �al��t�rmak i�in;

npm run project-start

E�er gulp ile projeyi �al��t�rmak isterseniz �u komutlar� �al��t�r�n�z;

npm run build
gulp

## Proje i�erisinde kullan�lan ara� ve teknolojiler

Front End Framework => Framework olarak Angular tercih edildi. Angular�n her yap� ta��na de�inmeye �al��t�m.(Change Detection, ViewEncapculation, Sibling, Componentler aras� veri payla��m�, Lazy Load, Routing, Moduler Yap�, �nput ve Output decaratorleri, Dependency Injection, Life Cycles vb.)

CSS => CSS taraf�nda SCSS tercih edildi. SCSS'in getirdi�i yenilikler kullan�lmaya �al���ld�(Variables,mixins,each vb). Class isimlendirmeleri BEM metadolojisine g�re yap�ld�. CSS framework olarak Bootstrap kullan�ld�. Animasyon ve media queryler g�stermek amac�yla bir ka� yerde kullan�ld�.

Data => Data i�in Fake-API tercih edildi. Fake API'yi kullanabilmek i�in json-server k�t�phanesini dahil ettim projeye.

Task Manager ve Build Tools => Bu k�s�mda gulp kullan�ld�. Gulp ile js,css dosyalar�n� s�k��t�rma vb. i�lemler kullan�labilir hale getirildi. Loader olarak uglify,autoprefixer vb eklenildi. BrowserSync ile gulp ile derleme i�lemi eklenildi.

HTTP => HTTP istekleri i�in rxJs k�t�phanesi kullan�ld�. rxJs'in getirdi�i yap�lar kullan�lmaya �al���ld�(map,filter vb.)

Kullan�lan K�t�phaneler :

angular-material
ngx-leaflet
angular-fontawesome
angularx-social-login
gulp
json-server
leaflet
ngx-toastr
rxjs
