
# Plugins
Any notes on customisations to plugins to be listed here 

## Ionic webview

Service worker added support manually
pull request #452
https://github.com/ionic-team/cordova-plugin-ionic-webview/pull/452
IonicWebViewEngine.java 
```java 
import android.webkit.ServiceWorkerController;
import android.webkit.ServiceWorkerClient;
```

```java
    ServiceWorkerController controller = null;
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
        controller = ServiceWorkerController.getInstance();
        controller.setServiceWorkerClient(new ServiceWorkerClient(){
            @Override
            public WebResourceResponse shouldInterceptRequest(WebResourceRequest request) {
                return localServer.shouldInterceptRequest(request.getUrl(), request);
            }
        });
    }
```


## Statusbar
pull request 171
https://github.com/apache/cordova-plugin-statusbar/pull/171


StatusBar.java 
```java
// Read 'StatusBarOverlaysWebView' from config.xml, default is true.
setStatusBarTransparent(preferences.getBoolean("StatusBarOverlaysWebView", true));
```

plugin.xml
```xml
<preference name="StatusBarOverlaysWebView" value="true" />
```

pull request 206 statusbar colour
https://github.com/apache/cordova-plugin-splashscreen/pull/206/commits/7e5bafd628ebe0478c51800171f72ce4b84d325a

## run after clean install
npm i cordova-plugin-pip -s