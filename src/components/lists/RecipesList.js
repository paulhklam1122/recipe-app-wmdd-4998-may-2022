import { FlatList } from 'native-base'
import RecipeCard from '../listItems/RecipeCard'

const RecipesList = ({ navigation }) => {
  const data = [
    {
      image:
        'https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0%2Bhh92WFDkNKTnsueeNeCCA18YtqgVXAduJhxolHfaAIhAMNEi5KgIm028GuCyJV02qGUI%2FPs3yEsWhGRxjaV%2FqDuKtsECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzgsK8iRlgghBgz20AqrwQh1GLpNBJuDvs5ei8%2F7Hmk%2FvD5dJSNnRTkA%2BWPTWPy48RmgS%2FbS3VpV4aDLs2l3Azf3%2BmvUuUu4bu1cvbKShahO3VbbIoq1G%2B%2FimmcqmxueGLMAKKySawNeGaG9k6PAZmoWbAif2aq2iNbzzLCiqulUf2IMhHwxr8uPKWBAGlh9BlPI%2Bu%2BbkmM%2FVG6Vf0pfuC4BWNrFTAVZYTbPCyqNSS2ka0VNZ%2FHHPRYW9e0isq%2BSBZZc7u7ReYuPwWR367MQ2jnaQwWzMkwB2Zb9IRUJp%2FuOOQ%2Foq9MM%2FaDu6YNZKfhMy%2BnI1F2wqwe%2BdxaWaS8TXLExVJWoXjTKvocDX%2FTHdCEONY1vWanwQPvgmVcmPrXjbl49HgIlB9yr5vhFtZptwq5CZRKLsHL2wwXo3aeTS4ncOl1q8Iy8dbD3TsChaz7tvD8axJjNsy9dX2I%2Bjvw%2FYwH%2FhFsOoGxClR%2Br73tljZFSj60lYFn2LvnVDUzu7xcX35pPdQx7ZS1saKyIILK1C0WR9K4fAIY%2FJkyxRCVVTVVQhfhgXrPTyUB3t55tvw0TimUbhAWlNWcUNMBLB4xFIp6VofwsIlXAlu0jcHQE7XZ5lfcOyborErQj%2FqyOxrh6QDM5z4PE07df9oIv70%2BsSxi4xXWZiKVUS2g2kJE1ViWSXxKQhVhXaC%2FFWlZV6OTe3BcHroKRPDbPmaJS59fLsuse7sMUJgmavknH%2FR7%2BMZOFj9pBCx28MfRfioj1UlVMOyqwJQGOqgB7B4gzAILeFO%2Bd2BGgFpCbGzrWoE%2Fnppy61HbMPyNnR4idOfeaiGoSh5J0FnYGb2QLuCq3aT4sJ8SigeP0KEvY3%2BKHYup9yjgplxj0T%2FlZtYnPHQ98NXpEGCDJW%2FlGeI0LjZQoeHFYQCzkZs57jrGdtPVYvklsAia%2B2uzNkPZhpcjhMEP60HZaY1Znm1LOnbkmSzPskahYCxYjrZylGUGR4jhJtmzyd%2Ft&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220527T012733Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMQBBDG4F%2F20220527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f3ad5a0e8e22e4afdece11f67d01be4f3c68cb54aae6f020aa548427540a00a4',
      label: 'Roast sirloin of beef',
      source: 'BBC Good Food',
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a'
    },
    {
      image:
        'https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0%2Bhh92WFDkNKTnsueeNeCCA18YtqgVXAduJhxolHfaAIhAMNEi5KgIm028GuCyJV02qGUI%2FPs3yEsWhGRxjaV%2FqDuKtsECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzgsK8iRlgghBgz20AqrwQh1GLpNBJuDvs5ei8%2F7Hmk%2FvD5dJSNnRTkA%2BWPTWPy48RmgS%2FbS3VpV4aDLs2l3Azf3%2BmvUuUu4bu1cvbKShahO3VbbIoq1G%2B%2FimmcqmxueGLMAKKySawNeGaG9k6PAZmoWbAif2aq2iNbzzLCiqulUf2IMhHwxr8uPKWBAGlh9BlPI%2Bu%2BbkmM%2FVG6Vf0pfuC4BWNrFTAVZYTbPCyqNSS2ka0VNZ%2FHHPRYW9e0isq%2BSBZZc7u7ReYuPwWR367MQ2jnaQwWzMkwB2Zb9IRUJp%2FuOOQ%2Foq9MM%2FaDu6YNZKfhMy%2BnI1F2wqwe%2BdxaWaS8TXLExVJWoXjTKvocDX%2FTHdCEONY1vWanwQPvgmVcmPrXjbl49HgIlB9yr5vhFtZptwq5CZRKLsHL2wwXo3aeTS4ncOl1q8Iy8dbD3TsChaz7tvD8axJjNsy9dX2I%2Bjvw%2FYwH%2FhFsOoGxClR%2Br73tljZFSj60lYFn2LvnVDUzu7xcX35pPdQx7ZS1saKyIILK1C0WR9K4fAIY%2FJkyxRCVVTVVQhfhgXrPTyUB3t55tvw0TimUbhAWlNWcUNMBLB4xFIp6VofwsIlXAlu0jcHQE7XZ5lfcOyborErQj%2FqyOxrh6QDM5z4PE07df9oIv70%2BsSxi4xXWZiKVUS2g2kJE1ViWSXxKQhVhXaC%2FFWlZV6OTe3BcHroKRPDbPmaJS59fLsuse7sMUJgmavknH%2FR7%2BMZOFj9pBCx28MfRfioj1UlVMOyqwJQGOqgB7B4gzAILeFO%2Bd2BGgFpCbGzrWoE%2Fnppy61HbMPyNnR4idOfeaiGoSh5J0FnYGb2QLuCq3aT4sJ8SigeP0KEvY3%2BKHYup9yjgplxj0T%2FlZtYnPHQ98NXpEGCDJW%2FlGeI0LjZQoeHFYQCzkZs57jrGdtPVYvklsAia%2B2uzNkPZhpcjhMEP60HZaY1Znm1LOnbkmSzPskahYCxYjrZylGUGR4jhJtmzyd%2Ft&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220527T012733Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMQBBDG4F%2F20220527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6cd0462f5641842cf7f4a2076688667c210f2b224f2b9e17d70e0f33b880b900',
      label: 'Beef Brisket',
      source: 'Simply Recipes',
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_710678b0fae9d4fa004975ef91aae1a3'
    },
    {
      image:
        'https://edamam-product-images.s3.amazonaws.com/web-img/219/219b9268b0f84eecf0cab133498b7ef3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQC0%2Bhh92WFDkNKTnsueeNeCCA18YtqgVXAduJhxolHfaAIhAMNEi5KgIm028GuCyJV02qGUI%2FPs3yEsWhGRxjaV%2FqDuKtsECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgzgsK8iRlgghBgz20AqrwQh1GLpNBJuDvs5ei8%2F7Hmk%2FvD5dJSNnRTkA%2BWPTWPy48RmgS%2FbS3VpV4aDLs2l3Azf3%2BmvUuUu4bu1cvbKShahO3VbbIoq1G%2B%2FimmcqmxueGLMAKKySawNeGaG9k6PAZmoWbAif2aq2iNbzzLCiqulUf2IMhHwxr8uPKWBAGlh9BlPI%2Bu%2BbkmM%2FVG6Vf0pfuC4BWNrFTAVZYTbPCyqNSS2ka0VNZ%2FHHPRYW9e0isq%2BSBZZc7u7ReYuPwWR367MQ2jnaQwWzMkwB2Zb9IRUJp%2FuOOQ%2Foq9MM%2FaDu6YNZKfhMy%2BnI1F2wqwe%2BdxaWaS8TXLExVJWoXjTKvocDX%2FTHdCEONY1vWanwQPvgmVcmPrXjbl49HgIlB9yr5vhFtZptwq5CZRKLsHL2wwXo3aeTS4ncOl1q8Iy8dbD3TsChaz7tvD8axJjNsy9dX2I%2Bjvw%2FYwH%2FhFsOoGxClR%2Br73tljZFSj60lYFn2LvnVDUzu7xcX35pPdQx7ZS1saKyIILK1C0WR9K4fAIY%2FJkyxRCVVTVVQhfhgXrPTyUB3t55tvw0TimUbhAWlNWcUNMBLB4xFIp6VofwsIlXAlu0jcHQE7XZ5lfcOyborErQj%2FqyOxrh6QDM5z4PE07df9oIv70%2BsSxi4xXWZiKVUS2g2kJE1ViWSXxKQhVhXaC%2FFWlZV6OTe3BcHroKRPDbPmaJS59fLsuse7sMUJgmavknH%2FR7%2BMZOFj9pBCx28MfRfioj1UlVMOyqwJQGOqgB7B4gzAILeFO%2Bd2BGgFpCbGzrWoE%2Fnppy61HbMPyNnR4idOfeaiGoSh5J0FnYGb2QLuCq3aT4sJ8SigeP0KEvY3%2BKHYup9yjgplxj0T%2FlZtYnPHQ98NXpEGCDJW%2FlGeI0LjZQoeHFYQCzkZs57jrGdtPVYvklsAia%2B2uzNkPZhpcjhMEP60HZaY1Znm1LOnbkmSzPskahYCxYjrZylGUGR4jhJtmzyd%2Ft&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220527T012733Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMQBBDG4F%2F20220527%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a23d2bbd4a6897254a6a5de7021bebab44d82c0f7397b358a9d050d1e8f5454d',
      label: 'Beef Tacos',
      source: 'No Recipes',
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_321f22ade4bdf65d6166eca828bb53fc'
    }
  ]

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <RecipeCard
          image={item.image}
          label={item.label}
          navigation={navigation}
          source={item.source}
          url={item.uri}
        />
      )}
      keyExtractor={item => item.url}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default RecipesList
