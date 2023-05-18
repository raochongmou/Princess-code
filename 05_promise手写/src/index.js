function Promise(execute) {
  // 添加属性
  this.PromiseState = "pending"; //默认值pending
  this.PromiseResult = null;
  this.callbacks = [];
  // 保存this
  const self = this;
  function resolve(data) {
    // 状态只能修改一次
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "fulfilled";
    self.PromiseResult = data;
    // 执行多次回调(不支持链式调用)
    self.callbacks &&
      self.callbacks.length &&
      self.callbacks.forEach(item => {
        item.sucCallback(data);
      });
  }
  function reject(data) {
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "rejected";
    self.PromiseResult = data;
    // 执行多次回调(不支持链式调用)
    self.callbacks &&
      self.callbacks.forEach(item => {
        item.failedCallback(data);
      });
  }
  // 同步调用【执行器函数】
  try {
    execute(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function(sucCallback, failedCallback) {
  return new Promise((resolve, reject) => {
    if (this.PromiseState === "fulfilled") {
      const result = sucCallback(this.PromiseResult);
      if (result instanceof Promise) {
        result.then(
          v => {
            resolve(v);
          },
          r => {
            reject(r);
          }
        );
      } else {
        resolve(result);
      }
    }
    if (this.PromiseState === "rejected") {
      const result = failedCallback(this.PromiseResult);
      reject(result);
    }
    console.log("this.PromiseState", this.PromiseState);
    if (this.PromiseState === "pending") {
      this.callbacks.push({
        sucCallback,
        failedCallback
      });
    }
  });
};
