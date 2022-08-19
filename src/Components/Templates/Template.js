import React from 'react'
import Header from '../Header/Header'

const Template = () => {
  return (
    <div className='template'>
      <Header/>

      <div className='content'>
        <div className='container mx-auto'>
          <div className='flex'>

            {/* sebelah kiri */}
            <div className='left-content w-3/4  mr-5   bg-white rounded-sm'>

                <div className='grid justify-items-start'>
                   <h1 className='my-2 ml-10'>Big Acumulation</h1>
                  <div className='mb-5 mt-3  '>
                      <div className='flex ml-10'>
                      <button class="inline-flex items-center mr-3 px-4 py-1 bg-cbg-color text-white text-sm font-medium rounded-md">Daily</button>                      
                      <button class="inline-flex items-center mr-3 px-4 py-1 bg-cbg-color text-white text-sm font-medium rounded-md">Weekly</button>                      
                      <button class="inline-flex items-center mr-3 px-4 py-1 bg-cbg-color text-white text-sm font-medium rounded-md">Monthly</button>                      
                      </div>

                      <table className='margin-right-table mt-5 mb-2 ml-4'>
                        <tr className='bordered' >
                          <td>Saham</td>
                          <td>Value</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                        <tr>
                          <td>ASSA</td>
                          <td>7000000000</td>
                        </tr>
                     
                      </table>
                  </div>

                </div>
              </div>
           


           {/* sebelah kanan */}
            <div className='right-content w-1/4'>
            <div className='rekomendasi'>
            <div className='bg-cbg-color text-white font-bold py-2 px-20 rounded-xl mb-1'>Rekomendasi</div>
                <div class="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
                  <div class="flex pb-6 items-center justify-between">
                    <table className='table-rekomendasi -mt-3 text-slate-800 font-sans '>
                      <tr>
                        <th className='remove pr-1'>#</th>
                        <th className='pr-1'>Buy</th>
                        <th className='pr-1'>TP1</th>
                        <th className='pr-1'>TP2</th>
                        <th className='pr-1'>TP3</th>
                        <th>SL</th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>BBCA</th>
                        <th className='pr-1'>1000-1200</th>
                        <th className='pr-1'>1400</th>
                        <th className='pr-1'>1700</th>
                        <th className='pr-1'>1900</th>
                        <th> 1000 </th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>TNCA</th>
                        <th className='pr-1'>100-200</th>
                        <th className='pr-1'>140</th>
                        <th className='pr-1'>170</th>
                        <th className='pr-1'>190</th>
                        <th> 90 </th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>BBYB</th>
                        <th className='pr-1'>200-400</th>
                        <th className='pr-1'>240</th>
                        <th className='pr-1'>370</th>
                        <th className='pr-1'>590</th>
                        <th> 190 </th>
                      </tr>
                    </table>
                  </div>
              </div>
            </div>
            <div className='rekap-menu'>
            <div className='bg-cbg-color text-white font-bold py-2 px-20 rounded-xl mb-1'>Rekap Menu</div>
                <div class="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border">
                  <div class="flex pb-6 items-center justify-between">
                    <table className='table-rekomendasi -mt-3 text-slate-800 font-sans '>
                      <tr>
                        <th className='remove pr-1'>#</th>
                        <th className='pr-1'>Buy</th>
                        <th className='pr-1'>TP1</th>
                        <th className='pr-1'>TP2</th>
                        <th className='pr-1'>TP3</th>
                        <th>SL</th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>BBCA</th>
                        <th className='pr-1'>1000-1200</th>
                        <th className='pr-1'>1400</th>
                        <th className='pr-1'>1700</th>
                        <th className='pr-1'>1900</th>
                        <th> 1000 </th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>TNCA</th>
                        <th className='pr-1'>100-200</th>
                        <th className='pr-1'>140</th>
                        <th className='pr-1'>170</th>
                        <th className='pr-1'>190</th>
                        <th> 90 </th>
                      </tr>
                      <tr className='margin-table'>
                        <th className='pr-1'>BBYB</th>
                        <th className='pr-1'>200-400</th>
                        <th className='pr-1'>240</th>
                        <th className='pr-1'>370</th>
                        <th className='pr-1'>590</th>
                        <th> 190 </th>
                      </tr>
                    </table>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template