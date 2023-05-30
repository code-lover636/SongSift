
def response(music="Um samba pra John Coltrane"):
    from sklearnex import patch_sklearn
    patch_sklearn()

    import pandas as pd
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.neighbors import NearestNeighbors

    music_data = pd.read_csv('dataset.csv')
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(music_data['track_genre'])
    music_data.isnull().sum()

    k = 5  # Number of neighbors to consider
    knn_model = NearestNeighbors(n_neighbors=k, metric='cosine')
    knn_model.fit(tfidf_matrix)

    def recommend_music(song_name, knn_model, vectorizer, music_data, top_n=5):
        song_vector = vectorizer.transform([song_name])
        _, indices = knn_model.kneighbors(song_vector)
        recommended_songs = music_data.iloc[indices[0]]['track_name'].values[:top_n]
        return recommended_songs
    
    result = recommend_music(music, knn_model, vectorizer, music_data)
    result = list(result)
    print(result)
    return result





# import pickle
# import pandas as pd

# music_data = pd.read_csv('dataset.csv')

# with open('model.pkl', 'rb') as file:
#     model = pickle.load(file)
# with open('vectorizer.pkl', 'rb') as file:
#     vect = pickle.load(file)
# def recommend_music(song_name, knn_model, vectorizer, music_data, top_n=5):
#     song_vector = vectorizer.transform([song_name])
#     _, indices = knn_model.kneighbors(song_vector)
#     recommended_songs = music_data.iloc[indices[0]]['track_name'].values[:top_n]
#     return recommended_songs

# def response(music):
#     result = recommend_music(music, model, vect, music_data, top_n=5)
#     result = list(result)
#     return result

# response("Um samba pra John Coltrane")