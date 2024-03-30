import { Response, Request, NextFunction } from "express";

AbortController.prototype.abort = function () {
  // @ts-ignore
  this._signal.aborted = true;
  this._invokeAbort();
  return this;
};
