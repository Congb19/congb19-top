import { useTimeAgo } from '@vueuse/core';
export const getDate = (time: string | Date) => {
  if (time instanceof Date) return time;
  else return new Date(time);
};
export const getPastTime = (time: string | Date) => {
  let date = getDate(time);
  return useTimeAgo(date);
};
