import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

export const Cookies = () => {
  return (
    <>
      <div className='flex flex-col pt-2 sm:pt-10 px-4 w-full justify-center place-items-center'>
        <div className='container space-y-5'>
          <Link to="/" className='font-bold flex items-center space-x-2 text-white bg-palatte-2 bg-opacity-90 w-fit px-2 py-0.5 rounded-xl hover:shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)] hover:bg-opacity-100 duration-200 ease-in'><span><BiArrowBack/></span><span>Geri</span></Link>
          <div className='font-bold flex flex-row space-x-2 items-center text-palatte-1'><span>Çerez Aydınlatma Metni</span></div>
          <div className='w-full flex flex-col space-y-4 py-3 px-2 rounded-xl shadow-[0_0px_15px_0px_rgba(131,144,250,0.35)]'>
            <p>İnternet sitemizin işletimi sırasında zorunlu çerezler ve internet sitesi kullanımının analiz edilmesini, sosyal medya özellikleri sunulmasını ve site deneyiminiz bakımından reklam ve içeriklerin kişiselleştirilmesinini sağlayan çerezler kullanılmaktadır.</p>
            <p>psikologbul.io olarak, sitemizi ziyaretiniz sırasında sizlerin deneyimini geliştirmek ve anonim veriler elde etmek için çerezler, pikseller, gifler gibi bazı teknolojilerden (“çerezler”) faydalanmaktayız. Bu teknolojilerin kullanımı başta 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVK Kanunu”) olmak üzere tabi olduğumuz mevzuata uygun şekilde gerçekleştirilmektedir.</p>
            <p>İşbu Çerez Aydınlatma Metni’nin amacı, psikologbul.io internet sitesinin (“Site”) işletilmesi sırasında Site kullanıcıları/üyeleri/ziyaretçileri (“Veri Sahibi”) tarafından çerezlerin kullanımı sırasında elde edilen kişisel verilerin işlenmesine ilişkin olarak sizlere bilgi vermektir. İşbu Aydınlatma Metni’nde Sitemizde hangi amaçlarla hangi tür çerezleri kullandığımızı ve bu çerezleri nasıl kontrol edebileceğinizi sizlere açıklamak istiyoruz.</p>
            <p>psikologbul.io olarak Sitemizde kullandığımız çerezleri kullanmaktan vazgeçebilir, bunların türlerini veya fonksiyonlarını değiştirebilir veya Sitemize yeni çerezler ekleyebiliriz. Dolayısıyla işbu Çerez Aydınlatma Metni’nin hükümlerini dilediğimiz zaman değiştirme hakkını saklı tutarız. Güncel Çerez Aydınlatma Metni üzerinde gerçekleştirilmiş olan her türlü değişiklik Site’de veya herhangi bir kamuya açık mecrada yayınlanmakla birlikte yürürlük kazanacaktır. Son güncelleme tarihini işbu Çerez Aydınlatma Metni’nin başında bulabilirsiniz.</p>
            <p>Hangi Çerezler Hangi Amaçlarla Kullanılmaktadır?</p>
            <p>Genel Olarak psikologbul.io olarak Sitemizde çeşitli amaçlarla çerezler kullanmakta ve bu çerezler vasıtasıyla birtakım verilerinizi işleyebiliriz. Bu amaçlar başlıca şunlardır:</p>
            <p>
              <ol className='list-disc px-6'>
                <li>Site’nin çalışması için gerekli temel fonksiyonları gerçekleştirmek. Örneğin, oturum açan üyelerin Site’de farklı sayfaları ziyaret ederken tekrar şifre girmelerine gerek kalmaması.</li>
                <li>Site’yi analiz etmek ve Site’nin performansını arttırmak. Örneğin, Site’nin üzerinde çalıştığı farklı sunucuların entegrasyonu, Site’yi ziyaret edenlerin sayısının tespit edilmesi ve buna göre performans ayarlarının yapılması ya da ziyaretçilerin aradıklarını bulmalarının kolaylaştırılması.</li>
                <li>Site’nin işlevselliğini arttırmak ve kullanım kolaylığı sağlamak. Örneğin, Site üzerinden üçüncü taraf sosyal medya mecralarına paylaşımda bulunmak, Site’yi ziyaret eden ziyaretçinin daha sonraki ziyaretinde kullanıcı adı bilgisinin ya da arama sorgularının hatırlanması.</li>
              </ol>
            </p>
            <p>KVK Kanunu’nun 5. ve 8. maddeleri uyarınca ve/veya ilgili mevzuattaki istisnaların varlığı halinde kişisel verileriniz mevzuat uyarınca gerekli olan hallerde rızanız doğrultusunda, aksi hallerde rızanız alınmaksızın yukarıdaki amaçlar doğrultusunda işlenebilecektir. psikologbul.io olarak, Aydınlatma Metni kapsamındaki kişisel verilerinizi yukarıda belirtilen amaçların gerçekleştirilebilmesi ile sınırlı olarak ve mevzuata uygun şekilde üçüncü kişiler ile paylaşabiliriz. Verilerin aktarıldığı tarafların kişisel verilerinizi dünyanın her yerindeki sunucularında saklayabileceğini belirtmek isteriz.</p>
          </div>
        </div>
      </div>  
      <Outlet/>
    </>
  )
}