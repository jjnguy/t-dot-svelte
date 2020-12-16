<script>
  import { lookup } from "../translate.js";
  export let key;
  export let def = key;
  export let data = null;
  var translation = lookup(key, data);
</script>

{#if translation.type == 'html'}
  {@html translation.txt || def}
{:else}{translation.txt || def}{/if}
