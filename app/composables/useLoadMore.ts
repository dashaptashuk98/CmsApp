export function useLoadMore<T>(items: Ref<T[]>, initialCount = 6, increment = 3) {
  const displayCount = ref(initialCount);
  
  const displayedItems = computed(() => items.value.slice(0, displayCount.value));
  
  const hasMore = computed(() => displayCount.value < items.value.length);
  
  const loadMore = () => {
    displayCount.value += increment;
  };
  
  return {
    displayedItems,
    hasMore,
    loadMore,
  };
}
