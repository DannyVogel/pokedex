export const usePerformance = () => {
  const startTime = useState("startTime", () => 0);
  const endTime = useState("endTime", () => 0);
  const calculateDuration = () => {
    const milliseconds = endTime.value - startTime.value;
    return (milliseconds / 1000).toFixed(2);
  };

  const resetPerformance = () => {
    startTime.value = 0;
    endTime.value = 0;
  };

  return {
    startTime,
    endTime,
    calculateDuration,
    resetPerformance,
  };
};
