function timeFormat(time: string) {
  return time.replace('PT', '').replace('H', 'h ').replace('M', 'min').replace('S', '');
}

export default timeFormat;
