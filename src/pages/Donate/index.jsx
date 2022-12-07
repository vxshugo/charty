import TopNav from "../../component/topNav";
import Footer from "../../component/footer";

const Donate = () => {
  return(
      <div>
          <TopNav/>
          <section id="donate" className="section-padding">
              <div className="container">
                  <div className="row">
                      <div className="donate-header">
                          <h2>Сделать пожертвование</h2>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10 col-sm-12">
                          <div className="tab-pane donate">
                              <form action="">
                                  <div className="donation-amount tab-donation form-group">
                                      <h2>Реквезиты счета</h2>
                                      {/*<input type="number" className="form-control" name="text" id="text"*/}
                                      {/*       placeholder="Enter Donation Amount"/>*/}
                                      <div style={{display: "flex", justifyContent: "space-between"}}>
                                          <p>БИК Банка</p>
                                          <p style={{textDecoration: "underline"}}>SABRKZKA</p>
                                      </div>
                                      <div style={{display: "flex", justifyContent: "space-between"}}>
                                          <p>ИИН/БИН клиента</p>
                                          <p style={{textDecoration: "underline"}}>220840043394</p>
                                      </div>
                                      <div style={{display: "flex", justifyContent: "space-between"}}>
                                          <p>№ Счета, валюта</p>
                                          <p style={{textDecoration: "underline"}}>KZ4991402203KZ00GED, Тенге</p>
                                      </div>
                                      <h2>Kaspi QR</h2>
                                      <div style={{display: "flex", justifyContent: "center"}}>
                                          <img style={{width: 400}} src="./assets/images/payment/kaspi.jfif" alt=""/>
                                      </div>
                                  </div>

                                  {/*<div className="donation-details tab-donation">*/}
                                  {/*    <h2>Details</h2>*/}
                                  {/*    <div className="row">*/}
                                  {/*        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">*/}
                                  {/*            <input type="text" className="form-control" name="name" id="fname"*/}
                                  {/*                   placeholder="First Name"/>*/}
                                  {/*        </div>*/}
                                  {/*        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">*/}
                                  {/*            <input type="text" className="form-control" name="name" id="name"*/}
                                  {/*                   placeholder="Last Name"/>*/}
                                  {/*        </div>*/}
                                  {/*        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">*/}
                                  {/*            <input type="email" className="form-control" name="email" id="email"*/}
                                  {/*                   placeholder="Email"/>*/}
                                  {/*        </div>*/}
                                  {/*        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">*/}
                                  {/*            <input type="text" className="form-control" name="Adress" id="Adress"*/}
                                  {/*                   placeholder="Adress"/>*/}
                                  {/*        </div>*/}
                                  {/*        <div className="col-lg-12 col-12 form-group">*/}
                                  {/*          <textarea className="form-control" name="note" id="note"*/}
                                  {/*                    placeholder="Message"*/}
                                  {/*                    rows="6"></textarea>*/}
                                  {/*        </div>*/}
                                  {/*    </div>*/}
                                  {/*</div>*/}

                                  {/*<div className="donation-payment tab-donation">*/}
                                  {/*    <h2>Payment</h2>*/}
                                  {/*    <div className="payment-area">*/}
                                  {/*        <div className="payment-by-card">*/}
                                  {/*            <div className="row">*/}
                                  {/*                <div*/}
                                  {/*                    className="col-lg-6 col-md-12 col-12 mb-3 d-flex flex-column form-group">*/}
                                  {/*                    <label className="mb-2 fw-bold">Card holder Name</label>*/}
                                  {/*                    <input type="text" placeholder="" name="name"/>*/}
                                  {/*                </div>*/}
                                  {/*                <div*/}
                                  {/*                    className="col-lg-6 col-md-12 col-12 mb-3 d-flex flex-column form-group">*/}
                                  {/*                    <label className="mb-2 fw-bold">Card Number</label>*/}
                                  {/*                    <input type="number" placeholder="" id="card" name="card"/>*/}
                                  {/*                </div>*/}
                                  {/*                <div*/}
                                  {/*                    className="col-lg-6 col-md-12 col-12 mb-3 d-flex flex-column form-group">*/}
                                  {/*                    <label className="mb-2 fw-bold">CVV</label>*/}
                                  {/*                    <input type="number" placeholder="" name="CVV"/>*/}
                                  {/*                </div>*/}
                                  {/*                <div*/}
                                  {/*                    className="col-lg-6 col-md-12 col-12 mb-3 d-flex flex-column form-group">*/}
                                  {/*                    <label className="mb-2 fw-bold">Expire Date</label>*/}
                                  {/*                    <input type="number" placeholder="" name="date"/>*/}
                                  {/*                </div>*/}
                                  {/*            </div>*/}
                                  {/*        </div>*/}
                                  {/*    </div>*/}
                                  {/*</div>*/}
                                  {/*<div className="form-btn text-center">*/}
                                  {/*    <button type="submit">Donate Now</button>*/}
                                  {/*</div>*/}
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer/>
      </div>
  )
}

export default Donate;