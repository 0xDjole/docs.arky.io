<script lang="ts">
  export let labels = ['SDK', 'HTTP'];
  let active = 0;
</script>

<div class="tabs-wrapper">
  <div class="tabs-header">
    {#each labels as label, i}
      <button
        type="button"
        class="tab-button"
        class:active={active === i}
        on:click={() => (active = i)}
      >
        {label}
      </button>
    {/each}
  </div>
  <div class="tabs-content">
    {#if active === 0}
      <slot name="tab1" />
    {:else}
      <slot name="tab2" />
    {/if}
  </div>
</div>

<style>
  .tabs-wrapper {
    margin: 1.5rem 0;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: var(--sl-color-bg-nav);
  }

  .tabs-header {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem;
    background: var(--sl-color-gray-6);
  }

  .tab-button {
    flex: 1;
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: var(--sl-color-gray-2);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .tab-button:hover {
    background: var(--sl-color-gray-5);
    color: var(--sl-color-white);
  }

  .tab-button.active {
    color: var(--sl-color-white);
    background: var(--sl-color-accent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .tabs-content {
    padding: 0;
  }

  .tabs-content :global(pre) {
    margin: 0 !important;
    border-radius: 0 0 0.75rem 0.75rem !important;
  }
</style>
