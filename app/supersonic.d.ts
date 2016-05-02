// Declare all type definitions of steroids ambient

declare interface ILogger {
  log: (message: string) => void; 
}

declare interface supersonic {
  logger: ILogger
}