import React,{useState, useEffect, useContext} from 'react'
import png1 from '../../assets/images/png_1.png'
import png3 from '../../assets/images/png_3.png'
import png4 from '../../assets/images/png_4.png'
import png5 from '../../assets/images/png_5.png'
import png6 from '../../assets/images/png_6.png'
import png9 from '../../assets/images/png_9.png'
import { StyledCardBox } from '../section-1-homeScreen/cardBox.style'
import { ArticleContext } from '../../App'
import { COLOR } from '../../data/Constantes'
import { Link } from 'react-router-dom';
import { RoutesList } from '../../data/Routes'
import { _url } from '../../data/Constantes'
const Section2 = ({className}) => {
const {articles,categories} =useContext(ArticleContext)


const accessoires=articles.filter(article=>{
    return (article.categorie=="accessoire")
})
const montres=articles.filter(article=>{
    return (article.categorie=="montre")
})
const telephones=articles.filter(article=>{
    return (article.categorie=="telephone")
})
const cosmetiques=articles.filter(article=>{
    return (article.categorie=="cosmetique")
})
  return (
    <div className={className} style={{backgroundColor:COLOR.MAIN}}>
        <div className='nav'>
            <div>
                Cliquez sur les barres en haut à gauche pour ouvrir le menu, cliquez sur l'icône de recherche en haut à droite pour effectuer une recherche rapide parmi tous nos articles, cliquez sur une image pour obtenir plus de détails sur le produit, et enfin, cliquez sur le bouton "Acheter maintenant" pour discuter directement avec nous.
            </div>
        </div>
        <div className='section2-1'>
            {cosmetiques.length !==0 && <ListArticles  id="accessoitre-link" articles={cosmetiques} categories={categories} category={"cosmetiques"} >salut</ListArticles>}
            {accessoires.length !==0 && <ListArticles  id="accessoitre-link" articles={accessoires} categories={categories} category={"accessoires"} />}
            {montres.length !==0 && <ListArticles id="montre-link" articles={montres} categories={categories} category={"montres"} />}
            {telephones.length !==0 && <ListArticles id="potable-link" articles={telephones} categories={categories} category={"telephones"} />}
            
            
            
            

            <div className="box2-1 flexDisplay hoverEffect" >
                <div   className='textStyle'>
                    <p>Ecouteurs Bluetooth</p>
                </div>
                <div  className='img1 img'>
                    <img src={png1} width="100%" alt="" className='w-100' />
                </div>

            </div>
            <div className="box2-2 flexDisplay hoverEffect" >
                <div   className='textStyle'>
                    <p>Ecouteurs Bluetooth</p>
                </div>
                <div  className='img1 img'>
                    <img src={png1} width="100%" alt="" className='w-100' />
                </div>
            </div>


            <div className="box2-3 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Montres connectées</p>
                </div>
                <div  className='img3 img'>
                    <img src={png4} width="100%" alt="" className='w-100' />
                </div>

            </div>
            <div className="box2-4 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Balladeurs</p>
                </div>
                <div  className='img4 img'>
                    <img src={png3} width="100%" alt="" className='w-100' />
                </div>  

            </div>

            <div className="box2-5 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Cables chargeurs</p>
                </div>            
                <div  className='img5 img'>
                    <img src={png6} width="100%" alt="" className='w-100 h-100' />
                </div>     

            </div>
            <div className="box2-6 flexDisplay hoverEffect">
                <div className='textStyle'>
                    <p>Chargeurs</p>
                </div>
                <div  className='img6 img'>
                    <img src={png9} alt="" width='100%' className='h-100 ' />
                </div>  
            </div>

        </div>
        <div></div>
    </div>

  )
}

const ListArticles=({id,articles,category,categories,children})=>{
    const initArticle=articles[0]
    const [articleBox, setArticleBox]=useState({...initArticle})
    const [focus, setFocus]=useState(initArticle.id);
    function changeArticleBox(id){
        const newArticle=articles.filter(article=>article.id==id)
        setArticleBox(newArticle[0])
        setFocus(id);

    }



    return (
        <div  style={{ width:"100%"}} className="list-article">
            
        <div className="category" style={{}}>
            <div></div>
            {/* <div >{children?"Offre premium":category}</div> */}
            <div id={id}></div>
        </div>
        <div className="articles">
        { 
            articles.map((article, index)=>{
                return(
                    <SingleArticle key={index} {...article}/>

                )

            })
        }
        </div>
        <div className="slug">
            <div>

            </div>
            <div>
                                {
                    categories.filter(oneCategory=>{
                        return oneCategory.category===category 
                    })[0].slug
                }
            </div>

        </div>
            {children?<StyledCardBox></StyledCardBox>:<div></div>}

        <div className="listImg" style={{overflowX:'hidden'}}>
            <div>
            {articles.filter((article,index)=>index<4).map(article=>{
                return(
                        <div key={article.id} className={`${focus==article.id ? "imgHover":""}`} style={{height:"100%",aspectRatio:"1/1", flexShrink:0  }}>
                            <img  src={_url.MAIN+article.image[0]} className={`img-fluid`}
                            alt="" width="100%" height="100%" onClick={()=>changeArticleBox(article.id)}/>
              
                            
                        </div>
                    )
            }
            )
            }
            <div className='enSavoirPlus'>
                <Link to={`${RoutesList.Categorie+articles[0].categorie}`}>
                    <div>
                        Voir d'autres articles de cette categorie d'articles...
                    </div>
                   
              </Link>
               
            </div>
            </div>
        </div>
        <div className="articleBox">
                <SingleArticle2 {...articleBox}/>
        </div>
                    <div className="square">
                        {
                            articles.map(article=>{
                                return(

                                <div key={article.id} className="square-box">
                                    <Link className="link" to={`${RoutesList.Details}${article.id}`} >
                                        <img src={_url.MAIN+article.image[0]} width="100%" alt="" className='w-100' />
                                    </Link>
                                    <div>
                                        <span><span className='squarePrice'>{article.price}</span> <span className='dollarSign'>$</span> {!article.pricePromo || <span className='promo-1'>{article.pricePromo} <span className='dollarSign'>$</span></span>} </span>
                                        <span>{article.name}</span>
                                        <div >
                                            <a target='_blank' href={`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${article.name}.%20Merci`}>
                                            Acheter maintenant

                                            </a> 
                                       </div>
                                    </div>
                                </div>
                                )
                                
                            })
                        }
                    </div>
        </div>

    )
}
const SingleArticle=({name,image,price,pricePromo,longName,id})=>{
    return(
    <div className="singleArticle">
        <div>
            <Link className="link" to={`${RoutesList.Details}${id}`} >
                <div>

                <img src={_url.MAIN+image[0]} alt="" width="100%" height="100%" />   
                </div>
            </Link>      
        </div>
        <span>{price} <span className='dollarSign'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign'>$</span></span>} </span>
        <span>{name} </span>
        <span>{longName}</span>
        <div className='_button'>
            <a target='_blank' href={`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${name}.%20Merci`}>
                Acheter maintenant

            </a>         
            </div>
    </div>
    )

}
const SingleArticle2=({name,image,price,pricePromo,longName,id})=>{
    const [imageOn, setImageOn]=useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOn(prevCount => (prevCount + 1));
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

    return(
    <div className="singleArticle2" >
        <div>
        <Link className="link" to={`${RoutesList.Details}${id}`} >
            <img src={_url.MAIN+image[imageOn%image.length]} alt="" width="100%" height="100%"/> 
        </Link>

        </div>

        <div>
            {
                image.map((singleImage,index,images)=>{
                    return (
                        <span key={index} className={`${(imageOn %images.length) ==index && "imageOn"} circle`} onClick={()=>setImageOn(index)}></span>
                    )
                })
            }
        </div>
        <span>{price} <span className='dollarSign2'>$</span> {!pricePromo || <span className='promo-1'>{pricePromo} <span className='dollarSign'>$</span></span>} </span>
        <span>{name} </span>
        <span> {longName} </span>
        <div >
        </div>
        <div className="_button">
            <a target='_blank' href={`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${name}.%20Merci`}>
            Acheter maintenant

            </a>
        </div>

    </div>
    )

}

export default Section2

