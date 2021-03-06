import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post'

import feed from '../../../assets/data/feed'

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            //if id property is available, there is no need to include keyExtractor
            />
        </View>
    )
}

export default SearchResultsScreen
