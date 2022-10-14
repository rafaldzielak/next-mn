export class ApiError extends Error {
  constructor(url: string, public status: number) {
    super(`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
  }
}

export const fetchJson = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new ApiError(url, response.status);
  return await response.json();
};

export const REVALIDATE_SECONDS = Number(process.env.REVALIDATE_SECONDS);
