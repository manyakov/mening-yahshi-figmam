import "./SectionSrmt.scss"

const SectionSrmt = () => {
  return (
    <div className="ora">
        <div className="top-text">
        <h1>Сколько стоит ремонт Samsung:</h1>
        <main className="ksp">Гарантируем лучшую цену в городе!</main>
        </div>
        
      <div className="ora-text">
            <div className="left-t">
                <span>Ремонт пылесоса    <b style={{
                    marginLeft: 33
                }}>от N грн</b>  </span>
                <span>Ремонт кофеварки   <b style={{
                    marginLeft: 26
                }}>от N грн</b>  </span>
                <span>Ремонт мультиварки <b style={{
                    marginLeft: 11
                }}>от N грн</b>  </span>
                <span>Ремонт утюга       <b style={{
                    marginLeft: 57
                }}>от N грн</b>  </span>
            </div>
            
            <div className="line-t"></div>
            
            <div className="center-t">
                <span>Ремонт отпаривателя <b style={{
                    marginLeft: 10
                }}>от N грн</b>  </span>
                <span>Ремонт гриля        <b style={{
                    marginLeft: 62
                }}>от N грн</b>  </span>
                <span>Ремонт чайника      <b style={{
                    marginLeft: 45
                }}>от N грн</b>  </span>
                <span>Ремонт увлажнителя  <b style={{
                    marginLeft: 13
                }}>от N грн</b>  </span>
            </div>
            
            <div className="line-t"></div>
            
            <div className="right-t">
                <span>Ремонт тостера      <b style={{
                    marginLeft: 49
                }}>от N грн</b>  </span>
                <span>Ремонт фритюрницы   <b style={{
                    marginLeft: 10
                }}>от N грн</b>  </span>
                <span>Ремонт блинницы     <b style={{
                    marginLeft: 31
                }}>от N грн</b>  </span>
                <span>Ремонт обогревателя <b style={{
                    marginLeft: 11
                }}>от N грн</b>  </span>
            </div>
      </div>

      <div className="ft">
        <span>Не нашли цену на ремонт своего устройства?</span>
        <button className="btn btn-dark">ПОСМОТРЕТЬ ПРАЙС</button>
      </div>
    </div>
  )
}

export default SectionSrmt
