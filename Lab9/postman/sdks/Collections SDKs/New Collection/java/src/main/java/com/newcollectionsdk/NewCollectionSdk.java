package com.newcollectionsdk;

import com.newcollectionsdk.config.NewCollectionSdkConfig;
import com.newcollectionsdk.http.Environment;
import com.newcollectionsdk.http.interceptors.DefaultHeadersInterceptor;
import com.newcollectionsdk.http.interceptors.RetryInterceptor;
import java.util.concurrent.TimeUnit;
import okhttp3.OkHttpClient;

/**
 * Main SDK client class for NewCollectionSdk.
 * Provides centralized access to all service endpoints with configurable authentication,
 * environment management, hooks, and HTTP client settings.
 */
public class NewCollectionSdk {

  private final NewCollectionSdkConfig config;

  /**
   * Constructs a new instance of NewCollectionSdk with default configuration.
   */
  public NewCollectionSdk() {
    // Default configs
    this(NewCollectionSdkConfig.builder().build());
  }

  /**
   * Constructs a new instance of NewCollectionSdk with custom configuration.
   * Initializes all services, HTTP client, and optional OAuth token manager.
   *
   * @param config The SDK configuration including base URL, authentication, timeout, and retry settings
   */
  public NewCollectionSdk(NewCollectionSdkConfig config) {
    this.config = config;

    final OkHttpClient httpClient = new OkHttpClient.Builder()
      .addInterceptor(new DefaultHeadersInterceptor(config))
      .addInterceptor(new RetryInterceptor(config.getRetryConfig()))
      .readTimeout(config.getTimeout(), TimeUnit.MILLISECONDS)
      .build();
  }

  /**
   * Sets the environment for all API requests.
   *
   * @param environment The environment to use (e.g., DEFAULT, PRODUCTION, STAGING)
   */
  public void setEnvironment(Environment environment) {
    setBaseUrl(environment.getUrl());
  }

  /**
   * Sets the base URL for all API requests.
   *
   * @param baseUrl The base URL to use for API requests
   */
  public void setBaseUrl(String baseUrl) {
    this.config.setBaseUrl(baseUrl);
  }
}
// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
