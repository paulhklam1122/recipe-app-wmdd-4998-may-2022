import { useState } from 'react'
import { Center, Container } from 'native-base'
import Form from '../forms/Form'
import { getRecipes } from '../../services/api'
import Loading from '../layout/Loading'
import RecipesList from '../lists/RecipesList'

const RecipesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [ingredient, setIngredient] = useState(null)

  const fetchRecipes = () => {
    setIsLoading(true)

    // getRecipes(ingredient).then(
    //   recipes => {
    //     setRecipes(recipes)
    //     setIsLoading(false)
    //   },
    //   error => {
    //     alert('Error', `Something went wrong! ${error}`)
    //   }
    // )
  }

  const handleInputChange = ingredient => {
    setIngredient(ingredient)
  }

  return (
    <Container>
      <Center px={4}>
        <Form onInputChange={handleInputChange} fetchRecipes={fetchRecipes} />
        {isLoading ? <Loading /> : <RecipesList navigation={navigation} />}
      </Center>
    </Container>
  )
}

export default RecipesContainer
