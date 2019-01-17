describe('Simple Convert', function() {
  const sql = `SELECT rp.orderDatetime FROM RpOrderHead rp WHERE rp.rpOrderNumber = '111111'`;
  it(sql, function() {
    const expect = `SELECT rp.order_datetime FROM RP_ORDER_HEAD rp WHERE rp.rp_order_number = '111111'`;
    assert.equal(convert(sql).toUpperCase(), expect.toUpperCase());
  });
});

describe('Open a file', function() {
  const expect = `SELECT rp.orderDatetime
FROM RpOrderHead rp
WHERE rp.rpOrderNumber = '111111'
`;
  it('Open a file', function() {
    assert.equal(readFile(), expect);
  });
});
