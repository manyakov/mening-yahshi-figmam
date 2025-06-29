import "./SectionSrmtlg.scss"

const SectionSrmtlg = () => {
  return (
    <div className="oralg">
        <div className="top-text">
        <h1>Сколько стоит ремонт Samsung:</h1>
        <main className="ksp">Гарантируем лучшую цену в городе!</main>
        </div>
        
      <div className="ora-textlg">
            <div className="left-tlg">
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
                 <span>Ремонт отпаривателя <b style={{
                    marginLeft: 7
                }}>от N грн</b>  </span>
                <span>Ремонт гриля        <b style={{
                    marginLeft: 59
                }}>от N грн</b>  </span>
            </div>
            
            <div className="line-tlg"></div>
            
            <div className="right-tlg">
                    <span>Ремонт увлажнителя  <b style={{
                    marginLeft: 13
                }}>от N грн</b>  </span>
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

      <div className="ftlg">  
        <span>Не нашли цену на ремонт своего устройства?</span>
        <button className="btn btn-danger">ПОСМОТРЕТЬ ПРАЙС</button>
      </div>
    </div>
  )
}

export default SectionSrmtlg
