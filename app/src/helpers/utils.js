export async function loadQuotes() {
  const response = await fetch("https://www.binance.com/api/v3/ticker/price");
  const data = await response.json();
  return data;
}
