# Problemas y soluciones

- Si al ejecutar `react-native run-android` sale la siguiente traza de error

```
JS server already running.
Building and installing the app on the device (cd android && ./gradlew installDebug)...
Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/getting-started.html
```

es un problema de permisos solucionado con `chmod 755 android/gradlew`

- Si al compilar y ejecutar en el emulador sale el error de dispositivo no conectado, volver a compilar y ejecutar. Limpiar y eliminar la aplicación del emulador y rogar a Dios que funcione. 

# Flujo de trabajo

- Ejecutar el emulador dentro de la sdk de android en `$ANDROID_HOME/emulator` el comando `emulator -avd testAVD`
- Ejecutar `npm run start:android` para transpilar y vigilar por cambios
- Ejecutar `npm run android` para lanzar la aplicación hacia el emulador
- Happy Coding!
