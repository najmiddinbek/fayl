const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
});

const Topic = mongoose.model('Topic', topicSchema);

const deleteTopics = async (deletedIds) => {
    try {
        await Topic.deleteMany({ _id: { $in: deletedIds } });
        console.log('Deleted topics successfully.');
    } catch (error) {
        console.error('Error deleting topics:', error);
    }
};

// _id larni saqlash
const saveDeletedIds = async (deletedIds) => {
    try {
        console.log('Saving deleted ids:', deletedIds);
    } catch (error) {
        console.error('Error saving deleted ids:', error);
    }
};

const handleTopicClick = async (topicId) => {
    await deleteTopics([topicId]);
    await saveDeletedIds([topicId]);
};