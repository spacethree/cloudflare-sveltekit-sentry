<script lang="ts">
  import { onMount } from "svelte";
  import Counter from "./Counter.svelte";
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcomeFallback from "$lib/images/svelte-welcome.png";

  import * as Sentry from "@sentry/sveltekit";
  const { logger } = Sentry;

  onMount(() => {
    logger.info("Hello from Sentry! (onMount)", {
      requestId: "123",
    });
  });
  // logger.error("Hello from Sentry!");
  // logger.warn("Hello from Sentry!");
  // logger.debug("Hello from Sentry!");
  // logger.fatal("Hello from Sentry!");
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcomeFallback} alt="Welcome" />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/+page.svelte</strong>
  </h2>

  <a class="link" href="/sentry-example-page">Sentry Example Page</a>

  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
