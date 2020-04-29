import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 测试
  router.get('/', controller.strategy.Test);

  // 初始化数据库表结构
  router.post('/api/database/table', controller.database.initDBTable);

  // 策略
  router.get('/api/:UserId/strategy', controller.strategy.StrategyList);
  router.post('/api/:UserId/strategy', controller.strategy.AddStrategy);
  router.put('/api/strategy/:Id', controller.strategy.UpdateStrategy);
  router.put('/api/strategy/:Id/backtestnum', controller.strategy.UpdateBacktestNum);
  router.delete('/api/strategy/:Id', controller.strategy.DelStrategy);

  // 回测
  router.get('/api/:StrategyId/backtest', controller.backtest.BacktestList);
  router.get('/api/:StrategyId/backtest/newest', controller.backtest.BacktestNewest);
  router.get('/api/backtest/:Id/status', controller.backtest.BacktestStatus);
  router.put('/api/backtest/:Id', controller.backtest.UpdateBacktest);
  router.delete('/api/backtest/:Id', controller.backtest.DelBacktest);

  // 回测详情
  router.get('/api/:BacktestId/strategyorder', controller.backtestresult.StrategyOrderList);
  router.get('/api/:BacktestId/logs', controller.backtestresult.LogsList);
  router.get('/api/:BacktestId/backtestinfo', controller.backtestresult.Backtestinfo); // 获取回测参数
  router.get('/api/backtest/standard', controller.backtestresult.Standard); // 基准
};
