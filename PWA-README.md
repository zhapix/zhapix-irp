# PWA Setup for Zhapix IRP

This application is now configured as a Progressive Web App (PWA) with the following features:

## ✅ What's Implemented

### 1. Web App Manifest (`manifest.json`)
- App name: "Industry Readiness Program - Zhapix"
- Short name: "Zhapix IRP"
- Theme color: #2979ff (matches your brand)
- Standalone display mode
- Icon references for all required sizes

### 2. Service Worker (`sw.js`)
- Offline caching of all static assets
- Background sync support
- Push notification support
- Cache management and cleanup

### 3. PWA Meta Tags in HTML
- Theme color meta tag
- Apple touch icon support
- Microsoft tile configuration
- Application name and descriptions

### 4. Install Prompt
- Automatic install button appears after 3 seconds
- Custom styled install prompt matching your brand colors

## 🎯 Next Steps Required

### 1. Add App Icons
Create and add the following icon sizes to `assets/icons/`:
- `icon-16x16.png` (16x16 pixels)
- `icon-32x32.png` (32x32 pixels)
- `icon-72x72.png` (72x72 pixels)
- `icon-96x96.png` (96x96 pixels)
- `icon-128x128.png` (128x128 pixels)
- `icon-144x144.png` (144x144 pixels)
- `icon-152x152.png` (152x152 pixels)
- `icon-192x192.png` (192x192 pixels)
- `icon-384x384.png` (384x384 pixels)
- `icon-512x512.png` (512x512 pixels)

**Tip**: Use your logo or create a simple icon with your brand colors (#2979ff)

### 2. Update Favicon
Replace `assets/favicon.png` with a proper 16x16 or 32x32 PNG favicon

## 🚀 How to Test

### 1. Local Testing
- Serve your files using a local server (required for service workers)
- ```bash
  # Using Python 3
  python -m http.server 8000
  
  # Using Node.js (if you have http-server)
  npx http-server .
  ```

### 2. Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to **Application** tab
3. Check **Manifest** - should show your app info
4. Check **Service Workers** - should show active service worker
5. Check **Storage** → **Cache Storage** - should show cached assets

### 3. Install PWA
1. Open your app in Chrome/Edge
2. Look for install icon in address bar or wait for install button
3. Click "Install" to add to home screen
4. Test offline functionality by disconnecting from internet

## 📱 PWA Features Enabled

- ✅ **Installable**: Can be installed on device home screen
- ✅ **Offline Support**: Works without internet connection
- ✅ **App-like Experience**: Runs in standalone mode
- ✅ **Push Notifications**: Ready for push notification implementation
- ✅ **Background Sync**: Handles offline actions when back online
- ✅ **Responsive Design**: Works on all device sizes

## 🔧 Configuration Files

- `manifest.json` - PWA manifest configuration
- `sw.js` - Service worker for offline functionality
- `browserconfig.xml` - Windows tile configuration
- PWA meta tags in `index.html`

## 🌐 Browser Support

PWA works best in:
- Chrome/Edge (full support)
- Firefox (good support)
- Safari (partial support, iOS 11.3+)

## 📝 Notes

- Service workers require HTTPS in production (localhost works for development)
- The install prompt appears automatically based on user engagement
- Cache version is `zhapix-irp-v1` - update this when making major changes
- All static assets are cached for offline access
