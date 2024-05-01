
import book from '../assets/book.png';

function DetailLivre() {
    return (
        <div className="detail-livre">
            <div className="recommandations">
                <h2>Recommandations : </h2>
            </div>
            <div className="books-container">
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
                <img className='book' src={book} alt='book' />
            </div>       
            <div className="description">
            <img className='book-img' src={book} alt='book' />
            <h2>Description : </h2>
            <p>Un livre est un document écrit formant unité et conçu comme tel, composé de pages reliées les unes aux autres. Il a pour fonction d'être un support de l'écriture, permettant la diffusion et la conservation de textes de nature variée. Un livre doit être lisible et agréable à lire. Il doit être bien écrit, bien présenté, bien illustré. Il doit être bien relié, bien imprimé, bien diffusé. Il doit être bien vendu, bien acheté, bien lu. Il doit être bien aimé, bien conservé, bien transmis. Il doit être bien commenté, bien critiqué, bien étudié. Il doit être bien écrit, bien présenté, bien illustré. Il doit être bien relié, bien imprimé, bien diffusé. Il doit être bien vendu, bien acheté, bien lu.</p>
            </div>
        </div>

    );
}

export default DetailLivre;
