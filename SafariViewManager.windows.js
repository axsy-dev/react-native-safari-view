/**
 * Stub of SafariViewManager for Windows.
 *
 * @providesModule SafariViewManager
 */
'use strict';

export default {
  isAvailable() {
    return Promise.reject(new Error('SafariView is unavailable on Windows'));
  }
};
