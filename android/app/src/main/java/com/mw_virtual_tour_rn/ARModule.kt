package com.mw_virtual_tour_rn

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ARModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "ARModule"
    }

    @ReactMethod
    fun showAR(promise: Promise) {
       promise.resolve("Hello ARWorld")
    }
}