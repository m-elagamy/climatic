const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

export default fetcher;
