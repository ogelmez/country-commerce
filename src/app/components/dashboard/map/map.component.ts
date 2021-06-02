import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/services/data.service';
import * as L from "leaflet";
import { latLng, tileLayer } from "leaflet";
import 'leaflet-providers';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import 'leaflet-contextmenu/dist/leaflet.contextmenu';
import { SharedService } from 'src/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnDestroy {
  map: L.Map | any;
  options = {
    layers: [
      tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Country Commerce Map' })
    ],
    zoom: 3,
    center: latLng(41.015137, 28.979530)
  };

  constructor(private dataService: DataService, private sharedService: SharedService) { }

  ngOnDestroy() {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }
  }
  onMapReady(map: L.Map) {
    let selectedCountry: any = {};
    const dataService = this.dataService
    const sharedService = this.sharedService;


    function getColor(d: any) {
      return d.properties.import === true
        ? "#800026"
        : d.properties.export === true
          ? "#00FF00"
          : "#FFFFFF";
    }

    function selectedStyle(feature: any) {
      return {
        weight: 5,
        opacity: 1,
        color: "black",
        fillColor: "none"

      };
    }
    function style(feature: any) {
      return {
        weight: 2,
        opacity: 1,
        color: "#666",
        fillOpacity: 0.3,
        fillColor: getColor(feature)
      };
    }

    function addExport(e: any) {
      sharedService.getTotalCount()
      var layer = e.relatedTarget;
      layer.setStyle({
        weight: 2,
        color: "#666",
        fillOpacity: 0.3,
        fillColor: "#00FF00"
      });
      const body = {
        export: true,
        import: false,
        exportCounter: e.relatedTarget.feature.properties.exportCounter + 1
      }

      const mergeProperties = Object.assign(e.relatedTarget.feature.properties, body)
      const data = Object.assign({}, e.relatedTarget.feature, { properties: mergeProperties })
      dataService.update(`${environment.url}/countries/${e.relatedTarget.feature.id}`, data).subscribe(data => console.log(data));
    }

    function addImport(e: any) {
      sharedService.getTotalCount()
      var layer = e.relatedTarget;
      layer.setStyle({
        weight: 2,
        color: "#666",
        fillOpacity: 0.3,
        fillColor: "#800026"
      });

      const body = {
        export: false,
        import: true,
        importCounter: e.relatedTarget.feature.properties.importCounter + 1
      }

      const mergeProperties = Object.assign(e.relatedTarget.feature.properties, body)
      const data = Object.assign({}, e.relatedTarget.feature, { properties: mergeProperties })
      dataService.update(`${environment.url}/countries/${e.relatedTarget.feature.id}`, data).subscribe(data => console.log(data));

    }

    function addNote(e: any) {
      var layer = e.relatedTarget;

      layer.bindPopup
        ('<textarea class="form-control" id="input-note" rows="3"></textarea></br><button type="submit"  id="button-submit" class="btn btn-success w-100 font-weight-bold mt-2">Not Ekle</button>')
        .openPopup();
      const buttonSubmit: any = L.DomUtil.get('button-submit');
      L.DomEvent.addListener(buttonSubmit, 'click', () => {
        const note = (<HTMLInputElement>document.getElementById("input-note")).value;
        const body = {
          note: note
        }
        const mergeProperties = Object.assign(e.relatedTarget.feature.properties, body)
        const data = Object.assign({}, e.relatedTarget.feature, { properties: mergeProperties })
        dataService.update(`${environment.url}/countries/${e.relatedTarget.feature.id}`, data).subscribe(data => console.log(data));
        layer.closePopup();
      });
    }

    function deleteAll(e: any) {
      sharedService.getTotalCount()
      var layer = e.relatedTarget;
      layer.setStyle({
        weight: 2,
        color: "#666",
        fillOpacity: 0.3,
        fillColor: "#FFFFFF"
      });

      const body = {
        export: false,
        import: false,
        importCounter: 0,
        exportCounter: 0,
        note: ""
      }

      const mergeProperties = Object.assign(e.relatedTarget.feature.properties, body)
      const data = Object.assign({}, e.relatedTarget.feature, { properties: mergeProperties })
      dataService.update(`${environment.url}/countries/${e.relatedTarget.feature.id}`, data).subscribe(data => console.log(data));
    }

    function openMenu(e: any) {

      e.bindContextMenu({
        contextmenu: true,
        contextmenuInheritItems: false,
        contextmenuItems: [
          { text: 'İhracat Yap', callback: addExport },
          { text: 'İthalat Yap', callback: addImport },
          { text: 'Not Ekle', callback: addNote },
          { separator: true },
          { text: 'Bilgileri Sil', callback: deleteAll },
          { text: 'Kapat', callback: function () { } },
        ]
      });

    }


    sharedService.country.subscribe(country => {
      L.geoJSON((country) as any, {
        style: selectedStyle
      }).addTo(map);

    })
    const onEachFeature = (feature: any, layer: any) => {
      openMenu(layer)
    };

    this.dataService.get(`${environment.url}/countries`)
      .subscribe(geo1 => {
        L.geoJSON((geo1) as any, {
          style: style,
          onEachFeature: onEachFeature
        }).addTo(map);
      })
    map.fitBounds(map.getBounds());
  }

}
