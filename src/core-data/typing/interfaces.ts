export interface CommonApiHttpError {
    statusCode: number;
    response: ApiHttpErrorResponse;
}

interface ApiHttpErrorResponse {
    errorMessage: string;
    stackTrace: string;
    initiator?: string;
}
