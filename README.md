# React Native Kurs Projesi — Goal Tracker

React Native öğrenme sürecinde geliştirilen ilk mobil uygulama projesi. Kullanıcıların kurs hedeflerini (goal) ekleyip listeden silebileceği basit bir hedef takip uygulamasıdır.

---

## Özellikler

- Yeni hedef eklemek için modal pencere açma
- Eklenen hedefleri `FlatList` ile listeleme
- Listedeki bir hedefe basarak silme (Android ripple efekti dahil)
- Koyu mor tema ile tutarlı arayüz tasarımı

---

## Kullanılan Teknolojiler

| Teknoloji        | Versiyon  |
|------------------|-----------|
| React Native     | 0.85.3    |
| Expo             | ~56.0.8   |
| React            | 19.2.3    |
| expo-status-bar  | ~56.0.4   |

---

## Proje Yapısı

```
my-app/
├── App.js                  # Ana uygulama bileşeni, state yönetimi
├── index.js                # Expo giriş noktası
├── app.json                # Expo yapılandırması
├── assets/                 # İkon, splash ve görsel dosyaları
└── companents/
    ├── GoalInput.js        # Hedef ekleme modal bileşeni
    └── GoalItem.js         # Tekil hedef satırı bileşeni
```

---

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
cd my-app
npm install

# Expo ile başlat
npm start

# Android emülatörde çalıştır
npm run android

# iOS simülatörde çalıştır
npm run ios

# Web tarayıcısında çalıştır
npm run web
```

> Expo Go uygulaması ile QR kod okutarak fiziksel cihazda da test edebilirsiniz.

---

## Ekran Görüntüleri

| Ana Ekran | Hedef Ekleme |
|-----------|--------------|
| Mor arka plan üzerinde hedef listesi | Modal pencereden hedef girişi |

---

## Geliştirici Notları

- Bu proje bir **React Native eğitim kursu** kapsamında sıfırdan geliştirilmiştir.
- Bileşenler fonksiyonel component yapısı ve `useState` hook'u kullanılarak yazılmıştır.
- `FlatList` performanslı liste render için tercih edilmiştir.
- `Modal` bileşeni `animationType="slide"` ile hedef ekleme ekranı olarak kullanılmıştır.

---

## Lisans

Bu proje eğitim amaçlıdır. Serbestçe kullanılabilir ve geliştirilebilir.
