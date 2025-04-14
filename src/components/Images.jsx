export default function Images({file})
{
    return (
        <div >
            {file.imgs.map(img=>(
                <img key={img.id} src={`../assets/images/${img.id}.jpg`}  alt={`image du projet ${img.id}`}></img>
            ))} 
        </div>
    )
}