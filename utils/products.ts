window['dataApi'] = {
  json: () => {
    return [
      {
        id: '050',
        title: 'Balenciaga Boots',
        price: '234',
        description: `Men's Balenciaga Boots`,
        category: 'Fashion & Accessories',
        image: 'https://fakeStoreApi/products/050'
      },
      {
        id: '053',
        title: 'Givenchy Bags',
        price: '3234',
        description: `Women's Givenchy Bags`,
        category: 'Fashion & Accessories',
        image: 'https://fakeStoreApi/products/053'
      }
    ]
  }
}


export const fakeApi = (): Promise<{json(): Products[]}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(window['dataApi'])
    }, 5000)
  })
};